# Homework : Early testing
import time
from selenium.webdriver.common.by import By

class E2E:
    @staticmethod
    def install(service, manager, webdriver):
        service = service(
            executable_path=manager().install())

        driver = webdriver.Chrome(service=service)
        # driver.get("https://google.com")
        
        driver.get("http://localhost:5173/")    
        
  
        buttons = driver.find_elements(By.CSS_SELECTOR, "button")
        for button in buttons:
            if button.text == 'USERS':
                print("USERS")
                button.click()
                time.sleep(5)

            elif button.text == 'PRODUCTS':
                print("PRODUCTS")
                button.click()
                  
        search_input = driver.find_element(By.CSS_SELECTOR, "input")
        search_input.send_keys("sony")
        time.sleep(2)
        search_input.clear()
      
        time.sleep(10)
        driver.quit()

        

