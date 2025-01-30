export enum PasswordStatus {
    weak = "weak",
    medium = "medium",
    strong = "strong",
}

export const checkPasswordStrength = (password: string): PasswordStatus => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const minLength = password.length >= 8;

    if (
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar &&
        minLength
    ) {
        return PasswordStatus.strong;
    } else if (
        (hasUpperCase && hasLowerCase && hasNumber && minLength) ||
        (hasLowerCase && hasNumber && hasSpecialChar && minLength)
    ) {
        return PasswordStatus.medium;
    } else {
        return PasswordStatus.weak;
    }
};

export const checkPasswordMatch = (
    password: string,
    confirmPassword: string
): boolean => password === confirmPassword;
