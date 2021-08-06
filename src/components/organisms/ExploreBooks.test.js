import {
    cleanup,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import ExploreBooks from './ExploreBooks';
import React from "react";
import axios from "axios";
import { Route, useParams } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { toHaveStyle } from "@testing-library/jest-native";

beforeEach(cleanup);


test('display books not present in library', async () => {
    jest.mock('axios');
    jest.mock('react-router-dom',() => ({
        ...jest.requireActual('react-router-dom'),
        useParams: jest.fn().mockReturnValue({category : 'Itre'})
      }));
    const books = [
        {
            "id": 8,
            "bookAuthor": "anand",
            "bookTitle": "carroms",
            "category": "Indoor Sports",
            "min": 20,
            "reads": "0.7k",
            "image": "book_image1.png"
        }
    ];
    const userBooks = [
        {
            "id": 9,
            "bookAuthor": "vishal",
            "bookTitle": "golf",
            "category": "Outdoor Sports",
            "min": 20,
            "reads": "0.7k",
            "image": "book_image1.png"
        }
    ];
    axios.get =  jest.fn().mockImplementation((url) => {
        switch (url) {
                    case 'http://localhost:3000/books':
                        console.debug('678--1');
                        return Promise.resolve({ data : books });
                        break;
                    case 'http://localhost:3000/userBooks':
                        console.debug('123--1');
                        return Promise.resolve({ data : books });
                        break;
                    default:
                        return Promise.reject(new Error('not found'));
                        break;
                    }});
    render(<MemoryRouter initialEntries={["/explore/Indoor Sports"]}
    initialIndex={0}> <Route path="/explore/:category" component={ExploreBooks}>
  </Route></MemoryRouter>);
    await waitForElementToBeRemoved(() => screen.getByText('loading...'));
    screen.debug();
    const authorElement = await screen.findByText(/anand/i);
    const addToLibBtnElement = await screen.getByTestId(8);
   
    expect(authorElement).toBeInTheDocument();


expect(addToLibBtnElement).toHaveStyle({
    display : 'none'
  });
});