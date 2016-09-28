
Feature('Login form');

// function(I) {...

Scenario('Test Login success', (I) => {
    I.amOnPage('/js/login.html');
    I.see('Anmeldung');
    I.fillField('username', 'admin');
    I.fillField('password', '123');
    I.click('Anmelden');
    I.waitForText('Login erfolgreich');
    I.see('Login erfolgreich');
});

Scenario('Test Login unsuccessfull', (I) => {
    I.amOnPage('/js/login.html');
    I.see('Anmeldung');
    I.fillField('username', 'ungueltig');
    I.fillField('password', 'ungueltig');
    I.click('Anmelden');
    I.waitForText('Üngultiger login');
    I.see('Üngultiger login');
});