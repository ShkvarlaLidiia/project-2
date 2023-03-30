from selenium import webdriver

from selenium.webdriver.ie.service import Service as IEService
from selenium.webdriver.edge.service import Service as EdgeService
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.firefox.service import Service as FirefoxService

from webdriver_manager.microsoft import EdgeChromiumDriverManager
from webdriver_manager.microsoft import IEDriverManager
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager

from E2E.E2E import E2E


if __name__ == "__main__":
    E2E.install(ChromeService, ChromeDriverManager, webdriver)
    E2E.install(FirefoxService, GeckoDriverManager, webdriver)
