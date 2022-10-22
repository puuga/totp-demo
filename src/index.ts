import { authenticator, totp } from 'otplib';
import { generateGoogleChartQRUrl } from './util/GoogleChart.util';
import { generateOTPAuthSchema } from './util/OTPAuth.util';

console.log('Hello TOTP');

// Generate a secret
const secret = authenticator.generateSecret();
// const secret = 'N5HTM43LKUAX2BSE';

// Generate a QR code
const label = 'puuga@TOTP-Demo';
const issuer = 'TOTP-Demo';
const authUrl = generateOTPAuthSchema({ secret, label, issuer });
const qrUrl = generateGoogleChartQRUrl({ data: encodeURIComponent(authUrl) });
console.log('authUrl', authUrl);
console.log('qrUrl', qrUrl);

// Generate a token
const token = totp.generate(secret);
// const token = '612966';
const isValid1 = totp.check(token, secret);
const isValid2 = totp.verify({ token, secret });

const token2 = '816951';
const isValid3 = totp.check(token2, 'NNODMRLLMYQCGAJD');
const isValid4 = totp.verify({ token: token2, secret: 'NNODMRLLMYQCGAJD' });

console.log('secret', secret);
console.log('token', token);
console.log('isValid1', isValid1);
console.log('isValid2', isValid2);
console.log('isValid3', isValid3);
console.log('isValid4', isValid4);