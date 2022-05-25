import data from './assets/data.json'

const graphElement = document.querySelector('.app__graph');

const MAX_BAR_HEIGHT = 9.375
const MAX_BAR_HEIGHT_UNIT = 'rem'
const maxValue = Math.max(...data.map(d => d.amount));

const todayWeekday = new Date().toLocaleString('en-GB', {
  weekday: 'short',
}).toLowerCase();

graphElement.innerHTML += data.map(d => {
  const barHeight = d.amount / maxValue * MAX_BAR_HEIGHT;

  return `
  <li>
    <div class="bar${d.day === todayWeekday ? ' today' : ''}" style="height: ${barHeight + MAX_BAR_HEIGHT_UNIT}"></div>
    <span class="bar-info">$${d.amount}</span>
    <span class="bar-name">${d.day}</span>
  </li>
  `;
}).join('')
