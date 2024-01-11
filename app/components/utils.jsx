import React from 'react'

export const validateString = (value: unknown, maxlength: number) => {
  if (!value || typeof value !== "string" || value.length > maxlength) {
    return false;
  }

  return true;
}

export default utils