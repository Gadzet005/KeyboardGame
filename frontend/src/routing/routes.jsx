import {
  HOME_PAGE,
  GAME_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  ACCOUNT_PAGE,
  COIN_RATING_PAGE,
  WORD_RATING_PAGE,
} from "./consts";
import { Home } from "../components/home/Home";
import { Game } from "../components/game/Game";
import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";
import { Account } from "../components/account/Account";
import { CoinRating } from "../components/rating/CoinRating";
import { WordRating } from "../components/rating/WordRating";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: HOME_PAGE,
    component: <Home />,
  },
  {
    path: GAME_PAGE,
    component: <Game />,
  },
  {
    path: LOGIN_PAGE,
    component: <Login />,
  },
  {
    path: REGISTER_PAGE,
    component: <Register />,
  },
  {
    path: ACCOUNT_PAGE,
    component: <Account />,
  },
  {
    path: COIN_RATING_PAGE,
    component: <CoinRating />,
  },
  {
    path: WORD_RATING_PAGE,
    component: <WordRating />,
  },
];
