R3MobileApp.TempBrowser1 = function (params) {
    var books = [
   { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, genre: 'Bildungsroman',
       price: 4.56, language: 'EN', length: 220, format: 'paperback'
   },
   { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi',
       price: 12.43, language: 'EN', length: 224, format: 'hardcover'
   },
   { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi',
       price: 7.21, language: 'EN', length: 306, format: 'e-book'
   },
   { author: 'K. Vonnegut', title: "God Bless You, Mr. Rosewater, or Pearls Before Swine", year: 1965, genre: 'Novel',
       price: 4.95, language: 'EN', length: 218, format: 'paperback'
   },
   { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction',
       price: 29.84, language: 'EN', length: 1024, format: 'hardcover'
   },
   { author: 'H. Lee', title: "To Kill a Mockingbird", year: 1960, genre: 'Novel',
       price: 4.73, language: 'EN', length: 357, format: 'e-book'
   },
   { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, genre: 'Dystopian novel, political fiction',
       price: 15.53, language: 'EN', length: 376, format: 'hardcover'
   },
   { author: 'G. Grass', title: "The Tin Drum", year: 1959, genre: 'Speculative fiction',
       price: 19.51, language: 'EN', length: 592, format: 'hardcover'
   },
   { author: 'R. Bradbury', title: "Dandelion Wine", year: 1957, genre: 'Novel',
       price: 5.95, language: 'EN', length: 298, format: 'e-book'
   },
   { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, genre: 'Sci-fi',
       price: 4.50, language: 'EN', length: 298, format: 'e-book'
   },
   { author: 'R. Bradbury', title: "Fahrenheit 451", year: 1953, genre: 'Dystopian novel',
       price: 7.90, language: 'EN', length: 179, format: 'paperback'
   },
   { author: 'C. Dickens', title: "Great Expectations", year: 1861, genre: 'Realistic fiction',
       price: 2.41, language: 'EN', length: 384, format: 'paperback'
   },
   { author: 'F. Scott Fitzgerald', title: "The Great Gatsby", year: 1925, genre: 'Novel',
       price: 16.18, language: 'EN', length: 176, format: 'hardcover'
   },
   { author: 'E. Hemingway', title: "For Whom the Bell Tolls", year: 1940, genre: 'War novel',
       price: 9.12, language: 'EN', length: 480, format: 'e-book'
   },
   { author: 'E. Hemingway', title: "Farewell to Arms", year: 1929, genre: 'War novel',
       price: 8.59, language: 'EN', length: 354, format: 'e-book'
   },
   { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, genre: 'Novel of manners',
       price: 8.28, language: 'EN', length: 258, format: 'paperback'
   }
];
    var viewModel = {
        viewShown: function () {

            $("#gridContainer").dxDataGrid({
                dataSource: books,
                columns: [
			{ dataField: 'author', width: 125 },
            { dataField: 'title', allowGrouping: false },
			{ dataField: 'year', width: 60, sortIndex: 0, sortOrder: 'asc', allowGrouping: false },
			{ dataField: 'genre', visible: false },
			{ dataField: 'price', width: 60, format: 'currency', precision: 2, visible: false, allowGrouping: false },
			{ dataField: 'length', width: 65, allowGrouping: false },
			{ dataField: 'format', width: 90 }
        ],
                
                allowColumnReordering: true,               
                pager: { visible: true },
                paging: { pageSize: 7 },                
                selection: { mode: 'none' }
            });
        }
    };

    return viewModel;
};