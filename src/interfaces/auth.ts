// ------------------- Shared Types -------------------

export type Gender = "male" | "female" | "other";
export type AccountType = "adopter" | "shelter";
export type UserRole = "admin" | "shelter" | "public";

// ------------------- Address -------------------

export interface AddressDto {
  province: string;
  city_id: number;
  street: string;
  street_number: string;
  floor: string;
  apartment: string;
}

// ------------------- User -------------------

export interface BaseUserDto extends AddressDto {
  name: string;
  last_name: string;
  birth_date: Date | null;
  email: string;
  password: string;
  gender: Gender;
  phone_number: string;
}

// ------------------- Shelter -------------------

export interface ShelterDto {
  name: string;
  description: string;
  shelter_logo: string;
  phone_number: string[];
}

// ------------------- Register Payload -------------------

export interface RegisterDto {
  user: BaseUserDto;
  shelter?: ShelterDto;
}

// ------------------- Form and Wizard State -------------------

export type FormValues = Omit<BaseUserDto, "city_id"> & { city_id: string };

export interface WizardFormData extends BaseUserDto {
  account_type?: AccountType;
  shelter?: ShelterDto;
  access_level?: {
    role: UserRole;
    shelter_id?: number;
  };
}

export interface RegisterWizardState {
  step: number;
  tipoDeCuenta: number; //0 = regular user, 1 = shelter
  formData: WizardFormData;
  setStep: (step: number) => void;
  setTipoDeCuenta: (tipo: number) => void;
  updateFormData: (data: Partial<WizardFormData>) => void;
  resetWizard: () => void;
}

// ------------------- Login & Auth Response -------------------

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    name: string;
    last_name: string;
    email: string;
    phone_number: string;
    gender: string;
    birth_date: string;
    access_level: {
      role: UserRole;
      shelter_id?: number;
    }[];
    shelter?: {
      id: number;
      name: string;
      description: string;
      phone_number: string;
    };
  };
}
