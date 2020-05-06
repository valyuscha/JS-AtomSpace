import {css} from 'lit-element'

export const counterCardStyles = css`
  .counter-card__wrapper {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 10px 2px rgba(0, 0, 0, .7);
    color: #000000;
    margin-top: 30px;
  }
  
  .counter-card__increment,
  .counter-card__decrement {
    border: 2px solid rgba(0, 0, 0, .5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: 20px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  .counter-card__result {
    margin: 0 15px;
    font-size: 20px;
  }
  
  @media screen and (max-width: 500px) {
    .counter-card__wrapper {
      padding: 10px;
    }
  }
`