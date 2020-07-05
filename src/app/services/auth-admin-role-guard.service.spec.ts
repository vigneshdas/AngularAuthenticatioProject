import { TestBed } from '@angular/core/testing';

import { AuthAdminRoleGuardService } from './auth-admin-role-guard.service';

describe('AuthAdminRoleGuardService', () => {
  let service: AuthAdminRoleGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdminRoleGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
