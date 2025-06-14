describe('Fitur Profil Siswa', () => {

  const email = 'mariakeyni2010@gmail.com';
  const password = 'maria_ch123';

  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');

    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.url().should('include', 'https://lms.teknologidigital.co.id/login');

  });
});

  it('TC-PRF-SI-01 - Membuka halaman menu Profil Saya', () => {
    cy.url('https://lms.teknologidigital.co.id/penel/profile');
    cy.contains('Kata Sandi');
});

  it('TC-PRF-SI-02 - Mengubah Kata Sandi', () => {
  // Step 1: Visit halaman login
  cy.visit('https://lms.teknologidigital.co.id/login');

  // Step 2: Isi form login
  cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
  cy.get('input[name="password"]').type('maria_ch123');
  cy.get('button[type="submit"]').click();

  // Step 3: Tunggu redirect ke dashboard atau profil
  cy.url().should('include', 'https://lms.teknologidigital.co.id/panel');

  // Step 4: Baru lanjut ke halaman ubah password
  cy.visit('https://lms.teknolodigital.co.id/panel/profile');

  cy.url().should('include', 'https://lms.teknologidigital.co.id/panel/profile');

  // Step 5: Isi form ubah password
  cy.get('input[placeholder="*Password Lama"]').type('maria_ch123');
  cy.get('input[placeholder="*Password Baru"]').type('maria_ch1234');
  cy.get('input[placeholder="*Konfirmasi Password Baru"]').type('maria_ch1234');

  cy.contains('Simpan').click();

  // Step 6: Verifikasi hasil
  cy.contains('Kata sandi berhasil diubah').should('exist'); // Atau sesuai notifikasi yang muncul
});

it('TC-PRF-SI-03 - Melihat Opsi Sign Out', () => {
   cy.visit('https://lms.teknologidigital.co.id/panel/profile');
   cy.get('input[type="email"]').type('mariakeyni2010@gmail.com');
   cy.get('input[type="password"]').type('maria_ch1234');
   cy.get('button[type="submit"]').click();

   cy.contains('mariakeyni2010@gmail.com').click();
   cy.contains('Sign out').should('be.visible');
});
