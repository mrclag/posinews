
import type { PlasmoCSConfig } from "plasmo"

const buttonStyles = {
  padding: '3px',
  margin: '1rem',
  border: '1px solid #555',
  height: 'fit-content',
  width: 'fit-content',
  borderRadius: '5px'
  }

function addButtonToNewsFeed() {
  const newsItems = document.querySelectorAll('.news-module__storyline')
  const bullets = document.querySelectorAll('.news-module__headline-bullet')

  bullets.forEach(bullet => bullet.remove())

  newsItems.forEach((newsItem) => {
      // @ts-ignore
    newsItem.style.display = 'flex'

    const button = document.createElement("button");
    button.innerText = 'X'
    Object.assign(button.style, buttonStyles)


    button.addEventListener("click", (e) => {
      e.preventDefault()
      // @ts-ignore
      newsItem.style.display = "none";
    });

    newsItem.insertBefore(button, newsItem.firstChild);
  });
}

addButtonToNewsFeed();