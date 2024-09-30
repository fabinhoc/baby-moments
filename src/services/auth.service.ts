import { useAuthStore } from 'src/stores/auth.store';
import { LoginDto } from 'src/types/dto/Login.dto';
import { storeToRefs } from 'pinia';
import useApi from 'src/composables/useApi';
// import { RegisterDto } from 'src/dto/Register.dto';
import { ResetPasswordDto } from 'src/types/dto/ResetPassword.dto';
import { ForgotPasswordDto } from 'src/types/dto/ForgotPassword.dto';
// import { useRouter } from 'vue-router';

export default function useAuthService() {
  // const router = useRouter();

  const login = async (payload: LoginDto) => {
    try {
      const { isLoggedIn } = storeToRefs(useAuthStore());
      if (isLoggedIn.value) return true;
      const { post } = useApi('/login');
      const { data } = await post(payload);
      const { authenticate } = useAuthStore();
      authenticate(data.user, data.token);
    } catch (error: unknown) {
      throw error;
    }
  };

  // const register = async (payload: RegisterDto) => {
  //   try {
  //     const { post } = useApi('auth/register');
  //     const { user, access_token, tenant } = await post(payload);
  //     user.token = access_token;
  //     user.tenant = tenant;
  //     const { authenticate } = useAuthStore();
  //     authenticate(user);
  //   } catch (error: unknown) {
  //     throw error;
  //   }
  // };

  const resendVerification = () => {
    try {
      const { post } = useApi('email/verification-notification');
      return post('');
    } catch (error: unknown) {
      throw error;
    }
  };

  const verifyEmail = (url: string) => {
    try {
      url = url.replace(process.env.API_URL as string, '');
      const { get } = useApi(url);
      return get();
    } catch (error: unknown) {
      throw error;
    }
  };

  const resetPassword = (payload: ResetPasswordDto) => {
    try {
      const { post } = useApi('reset-password');
      return post(payload);
    } catch (error: unknown) {
      throw error;
    }
  };

  const forgotPassword = (payload: ForgotPasswordDto) => {
    try {
      const { post } = useApi('forgot-password');
      return post(payload);
    } catch (error: unknown) {
      throw error;
    }
  };

  const logout = () => {
    try {
      const { post } = useApi('logout');
      const { logout } = useAuthStore();
      post('');
      logout();
    } catch (error: unknown) {
      throw error;
    }
  };

  return {
    login,
    logout,
    resendVerification,
    verifyEmail,
    forgotPassword,
    resetPassword,
  };
}
