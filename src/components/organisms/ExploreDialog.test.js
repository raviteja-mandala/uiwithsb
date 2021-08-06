import {
    render,
    screen
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ExploreDialog from './ExploreDialog';

// beforeEach(() => {
//     jest.spyOn(global, 'fetch').mockResolvedValue({
//         json: jest.fn().mockResolvedValue(books)
//     })
// });

test('test explore dialog ', async () => {

    const books = [{

        "id": 6,
        "bookTitle": "Zoology",
        "bookAuthor": "Vikram",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png",
        "category": "Medicine"

    }];

    const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(books) }));
    render(<BrowserRouter><ExploreDialog open={true} onclose={() => { }} /></BrowserRouter>);
    const myElement = await screen.findByText(/Medicine/i);
    expect(myElement).toBeInTheDocument();
    mockFetchMethod.mockRestore;
});


test('test explore dialog 1', async () => {

    const books = [
        {
            "id": 3,
            "bookTitle": "Fluid Mechanics",
            "bookAuthor": "Rohan",
            "min": 42,
            "reads": "1.2k",
            "image": "book_image3.png",
            "category": "Science"
        },
    ];
    const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(books) }));
    render(<BrowserRouter><ExploreDialog open={true} onclose={() => { }} /></BrowserRouter>);
    const myElement = await screen.findByText(/Science/i);
    expect(myElement).toBeInTheDocument();
    mockFetchMethod.mockRestore;

    const tree = renderer.create((<BrowserRouter><ExploreDialog open={true} onclose={() => { }} /></BrowserRouter>)).toJSON();
    expect(tree).toMatchSnapshot();
});