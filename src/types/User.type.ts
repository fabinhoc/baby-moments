export interface UserType {
  name: string;
  uuid: string;
  avatar: string | null;
  email: string;
  created_at: Date;
  updated_at: Date;
  email_verified_at: Date | null;
  available_memory: number | null;
  memory_used: number | null;
}
