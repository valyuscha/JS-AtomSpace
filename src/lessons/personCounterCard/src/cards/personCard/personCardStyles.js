import {css} from 'lit-element'

export const personCardStyles = css`
  .person-card__wrapper {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 10px 2px rgba(0, 0, 0, .7);
    margin-bottom: 30px;
  }
  
  .person-card__img {
    width: 75px;
    height: 75px;
    border: 1px solid #ffffff;
    margin-right: 20px;
  }
  
  .person-card__img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  
  .person-card__name {
    color: #000000;
    font-size: 30px;
    margin: 0;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
  }
  
  @media screen and (max-width: 500px) {
    .person-card__wrapper {
      padding: 10px;
    }
    
    .person-card__img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    
    .person-card__name {
      font-size: 20px;
    }
  }
`