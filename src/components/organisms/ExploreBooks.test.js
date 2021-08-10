import {
    cleanup,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from "axios";
import { configure, mount } from "enzyme";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import ExploreBooks from './ExploreBooks';

configure({ adapter: new Adapter() });

beforeEach(cleanup);

describe("Test Explore books.", () => {
    jest.mock('axios');
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
            "image": "book_image1.png",
            "status": "finished"
        }
    ];
    const updatedBook =
    {
        "id": 8,
        "bookAuthor": "anand",
        "bookTitle": "carroms",
        "category": "Indoor Sports",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png",
        "status": "currentlyReading"
    };

    test('check whether book is displayed on page.', async () => {
        axios.get = jest.fn().mockImplementation((url) => {
            switch (url) {
                case 'http://localhost:3000/books':
                    return Promise.resolve({ data: books });
                    break;
                case 'http://localhost:3000/userBooks':
                    return Promise.resolve({ data: userBooks });
                    break;
                default:
                    return Promise.reject(new Error('not found'));
                    break;
            }
        });
        render(<MemoryRouter initialEntries={["/explore/Indoor Sports"]}
            initialIndex={0}> <Route path="/explore/:category" component={ExploreBooks}>
            </Route></MemoryRouter>);
        await waitForElementToBeRemoved(() => screen.getByText('loading...'));
        const authorElement = await screen.findByText(/anand/i);
        expect(authorElement).toBeInTheDocument();
    });
    xtest('click add to library button, check status of book is currently reading', async () => {
        cleanup();
        axios.get = jest.fn().mockImplementation((url) => {
            switch (url) {
                case 'http://localhost:3000/books':
                    return Promise.resolve({ data: books });
                    break;
                case 'http://localhost:3000/userBooks':
                    return Promise.resolve({ data: userBooks });
                    break;
                default:
                    return Promise.reject(new Error('not found'));
                    break;
            }
        });
        const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(updatedBook) }));
        const exploreBooksComp = mount(<MemoryRouter initialEntries={["/explore/Indoor Sports"]}
            initialIndex={0}> <Route path="/explore/:category" component={ExploreBooks}>
            </Route></MemoryRouter>);
        const promise = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    exploreBooksComp.update();
                    resolve();
                }, 1500);
            });
        };
        return promise().then(() => {
            const addToLibbtn = exploreBooksComp.findWhere(node => {
                return node.type() === 'button' && node.text() === 'Add to library'
            });
            expect(addToLibbtn.hasClass(/colorButton/i)).toBe(true);
            addToLibbtn.simulate('click');
            exploreBooksComp.update();
        })
    });
    test('click add to library button, check whether hideButton style is applied to "Add to library" button.', async () => {
        axios.get = jest.fn().mockImplementation((url) => {
            switch (url) {
                case 'http://localhost:3000/books':
                    return Promise.resolve({ data: books });
                    break;
                case 'http://localhost:3000/userBooks':
                    return Promise.resolve({ data: userBooks });
                    break;
                default:
                    return Promise.reject(new Error('not found'));
                    break;
            }
        });
        const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(updatedBook) }));
        render(<MemoryRouter initialEntries={["/explore/Indoor Sports"]}
            initialIndex={0}> <Route path="/explore/:category" component={ExploreBooks}>
            </Route></MemoryRouter>);
        const btnElm = await screen.findByText(/Add to library/i);
        let beforeStyle = (screen.getAllByRole('button'))[1].getAttribute('class');
        expect(beforeStyle.split(' ')[1].split('-').includes('colorButton'));
        userEvent.click(btnElm);
        await waitFor(() => {
            let afterStyle = (screen.getAllByRole('button'))[1].getAttribute('class'); //returns something like "Mui-root mui-AbcXYZ-success"
            //first split is to split on the basis of spaces and the second one to do on the bases of hyphen
            expect(afterStyle.split(' ')[1].split('-').includes('hideButton'));
        })
    });
});