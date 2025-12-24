import { describe, it, expect } from 'vitest';
import { getUserDisplayName, getUserBirthYear } from './user.utils';
import { userName } from '../modules/user';

describe('user.utils', () => {
  describe('getUserDisplayName', () => {
    it('should return the full name with title, first name, and last name', () => {
      const name: userName = {
        title: 'Mr',
        first: 'John',
        last: 'Doe'
      };
      expect(getUserDisplayName(name)).toBe('Mr John Doe');
    });

    it('should handle missing title gracefully (though it might result in undefined)', () => {
      const name: userName = {
        first: 'Jane',
        last: 'Smith'
      };
      // According to implementation: return `${name.title} ${name.first} ${name.last}`;
      expect(getUserDisplayName(name)).toBe('undefined Jane Smith');
    });
  });

  describe('getUserBirthYear', () => {
    it('should return the correct birth year for a given Date object', () => {
      const date = new Date('1990-01-01');
      expect(getUserBirthYear(date)).toBe('1990');
    });

    it('should return the correct birth year for a different Date object', () => {
      const date = new Date('2025-12-24');
      expect(getUserBirthYear(date)).toBe('2025');
    });
  });
});