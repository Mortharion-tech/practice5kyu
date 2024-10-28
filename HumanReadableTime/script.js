/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

function humanReadable (seconds) {
    const secs = seconds % 60;
    const hours = (seconds - seconds%3600)/3600;
    const mins = (seconds - secs - hours*3600)/60;
    return String(hours).padStart(2, '0')+':'+String(mins).padStart(2, '0')+':'+String(secs).padStart(2, '0');
}