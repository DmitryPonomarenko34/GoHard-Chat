// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Bus
import { USER_ID } from '../../init';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Public: FC = () => {
    const checkUserAutorization = localStorage.getItem(USER_ID);

    if (checkUserAutorization) {
        return (
            <Routes>
                <Route
                    element = { <Pages.Main /> }
                    path = { book.ROOT }
                />
                <Route
                    element = {
                        <Navigate
                            replace
                            to = { book.ROOT }
                        />
                    }
                    path = '*'
                />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route
                element = { <Pages.Registration /> }
                path = { book.REGISTRATION }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.REGISTRATION }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
