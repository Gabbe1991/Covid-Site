import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import App from '../App';

describe("Country names", () =>  {
   it("Should give me country names", async () => {
       render(<App/>);
   });
   });
       
    