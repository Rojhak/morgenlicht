from playwright.sync_api import sync_playwright

def verify_carefinder():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:3001/leistungen')

        # 1. Check initial state
        page.wait_for_selector('role=progressbar')
        progress_bar = page.locator('role=progressbar')
        print(f"Initial ARIA valuenow: {progress_bar.get_attribute('aria-valuenow')}")

        # 2. Select PG 2
        page.locator('button', has_text='2').click()
        page.locator('button', has_text='Weiter').click()

        # 3. Check Sachleistung step focus and progress
        page.wait_for_selector('text=Nutzen Sie bereits einen Pflegedienst?')
        sachleistung_step = page.locator('text=Nutzen Sie bereits einen Pflegedienst?').locator('..').locator('..')
        print(f"Sachleistung step focused: {sachleistung_step.evaluate('el => el === document.activeElement')}")
        print(f"Step 2 ARIA valuenow: {progress_bar.get_attribute('aria-valuenow')}")

        # 4. Select Nein
        page.locator('button', has_text='Nein').click()

        # 5. Check Result step focus and progress
        page.wait_for_selector('text=Stunden pro Monat')
        result_step = page.locator('text=Stunden pro Monat').locator('..').locator('..')
        print(f"Result step focused: {result_step.evaluate('el => el === document.activeElement')}")
        print(f"Step 3 ARIA valuenow: {progress_bar.get_attribute('aria-valuenow')}")

        browser.close()

if __name__ == '__main__':
    verify_carefinder()
