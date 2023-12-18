import './index.scss';
import Item from './components/item.jsx';

function App() {
  return (
    <div className="App">
      <div className="top">
        <ul className="tabs">
          <li className="active">Все</li>
          <li>Открытые</li>
          <li>Завершённые</li>
        </ul>
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
        </svg>
      </div>
      
      {<Item/>}

      <div className="form">
        <div className="form__checkbox">
          <input class="styled-checkbox" id="add-checkbox" type="checkbox" value="value1" />
          <label for="add-checkbox" />
        </div>
        <div class="form__fields">
          <input type="text" placeholder="Название" className="input-title" />
          <input type="text" placeholder="Введите текст..." className="input-text" />
        </div>
        <svg height="32px" viewBox="0 0 512 512" width="32px">
          <g>
            <g>
              <g>
                <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z" />
              </g>
            </g>
            <g>
              <polygon points="264.1,128 247.3,128 247.3,247.9 128,247.9 128,264.7 247.3,264.7 247.3,384 264.1,384 264.1,264.7 384,264.7     384,247.9 264.1,247.9   " />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
