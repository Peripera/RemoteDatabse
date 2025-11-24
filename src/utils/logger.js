
export function logInfo(tag, message, data = null) {
  const logMessage = `[INFO] [${tag}] ${message}`;
  console.log(logMessage, data ?? '');
}

export function logError(tag, message, error = null) {
  const logMessage = `[ERROR] [${tag}] ${message}`;
  console.error(logMessage, error ?? '');
}
