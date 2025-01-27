export enum PasswordStatus {
    weak = "Your password is too weak. Consider adding more characters, including uppercase letters, numbers, and special symbols.",
    medium = "Your password is okay, but it can be stronger. Try adding more unique characters to improve security.",
    strong = "Great job! Your password is strong and secure.",
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
