export function generateGoogleChartQRUrl({
    width = 300,
    height = 300,
    data = 'Hello+world',
}={}): string {
    return `https://chart.googleapis.com/chart?cht=qr&chs=${width}x${height}&chl=${data}`;
}