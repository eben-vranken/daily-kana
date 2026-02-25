import { Injectable, signal } from '@angular/core';
import {
  AuthResponse,
  OAuthResponse,
  User,
  createClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  currentUser = signal<{ email: string; username: string } | null>(null);

  private toMetadataRecord(user: User): Record<string, unknown> {
    return (user.user_metadata ?? {}) as Record<string, unknown>;
  }

  private toCleanUsername(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9._-]/g, '')
      .slice(0, 30);
  }

  private generateUsername(user: User): string {
    const metadata = this.toMetadataRecord(user);
    const emailLocalPart = user.email?.split('@')[0] ?? '';
    const preferredUsername = metadata['preferred_username'];
    const userName = metadata['user_name'];
    const fullName = metadata['full_name'];
    const name = metadata['name'];

    const candidates = [preferredUsername, userName, fullName, name, emailLocalPart];
    for (const candidate of candidates) {
      if (typeof candidate === 'string') {
        const cleaned = this.toCleanUsername(candidate);
        if (cleaned.length > 0) {
          return cleaned;
        }
      }
    }

    return `user_${user.id.slice(0, 8)}`;
  }

  private getUsername(user: User): string {
    const metadata = this.toMetadataRecord(user);
    const existing = metadata['username'];
    if (typeof existing === 'string' && existing.trim().length > 0) {
      return existing;
    }

    return this.generateUsername(user);
  }

  async syncCurrentUser(user: User | null): Promise<void> {
    if (!user || !user.email) {
      this.currentUser.set(null);
      return;
    }

    let resolvedUser = user;
    const metadata = this.toMetadataRecord(user);
    const hasUsername = typeof metadata['username'] === 'string' && metadata['username'].trim().length > 0;

    if (!hasUsername) {
      const fallbackUsername = this.generateUsername(user);
      const { data, error } = await this.supabase.auth.updateUser({
        data: {
          ...metadata,
          username: fallbackUsername,
        },
      });

      if (!error && data.user) {
        resolvedUser = data.user;
      }
    }

    const email = resolvedUser.email ?? user.email;
    if (!email) {
      this.currentUser.set(null);
      return;
    }

    this.currentUser.set({
      email,
      username: this.getUsername(resolvedUser),
    });
  }

  signup(email: string, username: string, password: string): Observable<AuthResponse> {
    const promise = this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });
    return from(promise);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const promise = this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    return from(promise);
  }

  logout(): void {
    this.supabase.auth.signOut();
  }

  signInWithGoogle(): Observable<OAuthResponse> {
    const redirectTo = typeof window !== 'undefined' ? `${window.location.origin}/` : undefined;
    const promise = this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
      },
    });
    return from(promise);
  }
}
