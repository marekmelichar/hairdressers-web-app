export default {
  locale: 'cs',

  'App.name': 'DPD Onboarding Admin',

  'Error.default': 'Error',

  'Header.nav.editor': 'Editor',
  'Header.nav.administration': 'Administrace',

  'Button.cancel': 'Zpět',
  'Button.delete': 'Odstranit',

  'Page.error.response.400': 'Uživatel nenalezen',
  'Page.error.response.403': 'Zakázaný přístup!',
  'Page.error.response.404': 'Uživatel nenalezen',
  'Page.error.response.405': 'Metoda je zakázána',
  'Page.error.response.422': 'Unprocessable entity',
  'Page.error.response.500': 'Interní chyba serveru!',

  /**
   * General error messages
   */
  'error.response.none': 'Unknown error', // Dummy "error" message
  'error.pageNotFound': 'Nothing found here',
  'success.response.none': 'Unknown success',

  /**
   * Login page
   */
  'login.header': 'DPD Onboarder Admin',
  'login.info': 'Zadejte své přihlašovací údaje',
  'login.email.title': 'E-mail',
  'login.email.empty': 'Zadejte svoji e-mailovou adresu',
  'login.email.invalidAddr': 'Neplatná e-mailová adresa',
  'login.password.title': 'Heslo',
  'login.password.empty': 'Zadejte své heslo',
  'login.password.invalidFormat': 'Špatný formát hesla',
  'login.remember': 'Neodhlašovat',
  'login.button': 'Přihlásit se',
  'login.reset': 'Zapomenuté heslo?',
  'login.noAccountYet': 'Nemáte účet?',
  'login.createAccount': 'Založit účet',
  'login.awaitingResponse': 'Přihlašování...',
  'login.error.response.400': 'Uživatel {email} nenalezen',
  'login.error.response.403': 'Zakázaný přístup!',
  'login.error.response.404': 'Uživatel {email} nenalezen',
  'login.error.response.405': 'Metoda je zakázána',
  'login.error.response.422': 'Unprocessable entity',
  'login.error.response.500': 'Interní chyba serveru!',
  'login.error.verifyAccount': 'Prosím napřed ověřte svůj účet',

  /**
   * reset Password
   */

  'reset.password.header': 'Resetovat heslo',
  'reset.password.content':
    'Zadejte Vaši e-mailovou adresu spojenou s účtem DPD Onboarder, na kterou zašleme výzvu k obnovení hesla.',
  'reset.password.email.title': 'E-mailová adresa',
  'reset.password.email.empty': 'Zadejte svoji e-mailovou adresu',
  'reset.password.email.invalidAddr': 'Neplatná e-mailová adresa',
  'reset.password.submit.send.button': 'Odeslat',
  'reset.password.success.title': 'Zkontrolujte e-mail',
  'reset.password.success.subTitle':
    'Na váš e-mail jsme Vám právě zaslali výzvu k nastavení nového hesla. Zkontrolujte svůj e-mail včetně spamového koše.',
  'reset.password.success.button.send.again': 'Zaslat znovou',
  'reset.password.success.button.succes': 'OK',
  'reset.password.error.response.400': 'Email {email} nenalezen',
  'reset.password.error.response.403': 'Zakázaný přístup!',
  'reset.password.error.response.404': 'Uživatel {email} nenalezen',
  'reset.password.error.response.405': 'Metoda je zakázána',
  'reset.password.error.response.422': 'Unprocessable entity',
  'reset.password.error.response.500': 'Interní chyba serveru!',
  'reset.password.success.message': 'Úspěšně odesláno, zkontrolujte Váš e-mail.',
  'reset.password.error.response': 'test',

  /**
   * Change Password
   */
  'change.password.header': 'Nové heslo',
  'change.password.title': 'Heslo',
  'change.password.repeat.title': 'Heslo znovu',
  'change.password.submit.send.button': 'Nastavit heslo',
  'change.password.oldPassword.title': 'Aktuální heslo',
  'change.password.oldPassword.empty': 'Zadejte své aktuální heslo',
  'change.password.invalidFormat':
    'Neplatný formát hesla - měl by obsahovat velké písmeno, číslo a speciální znak',
  'change.password.newPassword.title': 'Nové heslo',
  'change.password.newPassword.empty': 'Zadejte nové heslo',
  'change.password.newPasswordAgain.title': 'Potvrďte nové heslo',
  'change.password.newPasswordAgain.empty': 'Zadejte nové heslo znovu',
  'change.password.newPasswordAgain.notEqual': 'Hesla se neshodují',
  'change.password.success.message': 'Heslo bylo změněno.',
  'change.password.error.response.0': 'Nelze kontaktovat server...',
  'change.password.error.response.400': '',
  'change.password.error.response.401': 'Uživatel není autorizován.',
  'change.password.error.response.403': '',
  'change.password.error.response.404': 'Nenalezen požadovný zdroj.',
  'change.password.error.response.409': 'Nové heslo nesmí být stejné jako předchozí.',
  'change.password.error.response.422': '',
  'change.password.error.response.500': 'Interní chyba serveru!',

  /**
   * Editor page
   */
  'editor.heading': 'Editor',
  'editor.button': 'Nový příspěvek',

  'editor.newPost.heading': 'Nový příspěvek',
  'editor.newPost.title': 'Nadpis',
  'editor.newPost.title.empty': 'Nadpis nesmí být prázdný',
  'editor.newPost.title.invalid': 'Nadpis musí být v textovém formátu',
  'editor.newPost.button.preview': 'Zobrazit náhled',
  'editor.newPost.button.save': 'Uložit',
  'editor.newPost.author': 'Autor',
  'editor.newPost.category': 'Kategorie',
  'editor.newPost.shipper': 'Shipper',
  'editor.newPost.shipmentApi': 'Shipment API',
  'editor.newPost.selfPrinting': 'Samotlačitel',
  'editor.newPost.postLanguage': 'Jazyk',
  'editor.newPost.languageSK': 'Slovenčina',
  'editor.newPost.languageEN': 'English',
  'editor.newPost.postState': 'Stav',
  'editor.newPost.conceptState': 'Koncept',
  'editor.newPost.publishedState': 'Publikováno',
  'editor.newPost.textEditorContent.empty': 'Obsah nesmí být prázdný',
  'editor.newPost.success.message': 'Příspěvek úspěšně vytvořen',
  'editor.newPost.error.response.400': 'Příspěvek nenalezen',
  'editor.newPost.error.response.403': 'Zakázaný přístup!',
  'editor.newPost.error.response.404': 'Příspěvek nenalezen',
  'editor.newPost.error.response.405': 'Metoda je zakázána',
  'editor.newPost.error.response.422': 'Unprocessable entity',
  'editor.newPost.error.response.500': 'Interní chyba serveru!',

  /**
   * Table of posts
   */
  'tableOfPosts.header': 'Nadpis',
  'tableOfPosts.category': 'Kategorie',
  'tableOfPosts.language': 'Jazyk',
  'tableOfPosts.status': 'Stav',
  'tableOfPosts.date': 'Datum',
  'tableOfPosts.language.sk': 'Slovenčina',
  'tableOfPosts.language.en': 'English',
  'tableOfPosts.language.cs': 'Čeština',
  'tableOfPosts.category.shipper': 'Shipper',
  'tableOfPosts.category.shipmentApi': 'Shipment API',
  'tableOfPosts.category.selfPrinting': 'Samotlačitel',
  'tableOfPosts.status.concept': 'Koncept',
  'tableOfPosts.status.published': 'Publikováno',

  /**
   * Edit a post - page
   */
  'editor.editPost.heading': 'Upravit příspěvek',
  'editor.editPost.title': 'Nadpis',
  'editor.editPost.title.empty': 'Nadpis nesmí být prázdný',
  'editor.editPost.title.invalid': 'Nadpis musí být v textovém formátu',
  'editor.editPost.button.preview': 'Zobrazit náhled',
  'editor.editPost.button.save': 'Uložit',
  'editor.editPost.author': 'Autor',
  'editor.editPost.category': 'Kategorie',
  'editor.editPost.shipper': 'Shipper',
  'editor.editPost.shipmentApi': 'Shipment API',
  'editor.editPost.selfPrinting': 'Samotlačitel',
  'editor.editPost.postLanguage': 'Jazyk',
  'editor.editPost.languageSK': 'Slovenčina',
  'editor.editPost.languageEN': 'English',
  'editor.editPost.postState': 'Stav',
  'editor.editPost.conceptState': 'Koncept',
  'editor.editPost.publishedState': 'Publikováno',
  'editor.editPost.textEditorContent.empty': 'Obsah nesmí být prázdný',
  'editor.editPost.success.message': 'Příspěvek úspěšně upraven',
  'editor.editPost.error.response.400': 'Příspěvek nenalezen',
  'editor.editPost.error.response.403': 'Zakázaný přístup!',
  'editor.editPost.error.response.404': 'Příspěvek nenalezen',
  'editor.editPost.error.response.405': 'Metoda je zakázána',
  'editor.editPost.error.response.422': 'Unprocessable entity',
  'editor.editPost.error.response.500': 'Interní chyba serveru!',

  'editor.deletePost.button': 'Smazat příspěvek',
  'editor.deletePost.success.message': 'Příspěvek úspěšně smazán',
  'editor.deleteModalTitle': 'Opravdu smazat?'
};
