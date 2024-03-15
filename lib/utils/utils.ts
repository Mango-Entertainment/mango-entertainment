export const hasErrorType = (
  value: any,
): value is { errors: { message: string }[] } => {
  return 'errors' in value && Array.isArray(value.errors)
}
