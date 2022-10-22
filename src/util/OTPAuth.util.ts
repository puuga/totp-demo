export function generateOTPAuthSchema({
    secret = 'SECRET',
    label = 'LABEL',
    issuer = 'ISSUER',
}={}): string {
    return `otpauth://totp/${issuer}:${label}?secret=${secret}&issuer=${issuer}`;
}