import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './routes/home/home.jsx'
import SearchPage from './routes/searchPage/searchPage.jsx'
import CreatePage from './routes/createPage/createPage.jsx'
import AuthPage from './routes/authPage/authPage.jsx'
import PostPage from './routes/postPage/postPage.jsx'
import ProfilePage from './routes/profilePage/profilePage.jsx'
import MainLayout from './routes/layouts/mainLayout.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<CreatePage/>} />
          <Route path='/pin/:id' element={<PostPage/>} />
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/:username' element={<ProfilePage/>} />
        </Route>
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
