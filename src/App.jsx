import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsMain from "./components/news/NewsMain";
import useNewsQuery from "./hooks/useNewsQuery";

function App() {
    const [category, setCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState(null);
    const { data: newsData, isLoading, error } = useNewsQuery(category, searchQuery);

    useEffect(() => {
        // Fetch initial data on component mount
        setCategory('all');
    }, []);

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const newsDataList = newsData.articles ?? newsData.result;

    return (
        <>
            <Navbar
                categories={['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']}
                onCategoryChange={handleCategoryChange}
                onSearch={handleSearch}
            />
            {error && <div>Error loading news</div>}
            {isLoading ? (
                <div className="h-screen flex items-center justify-center">Loading...</div>
            ) : (
                <NewsMain newsData={newsDataList} isLoading={isLoading} error={error}/>
            )}  
            <Footer 
                categories={['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']}
                onCategoryChange={handleCategoryChange}
            />
        </>
    )
}

export default App
