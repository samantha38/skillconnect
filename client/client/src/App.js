import { useState } from 'react';
import JobForm from './components/JobForm';
import JobListings from './components/JobListings';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [refresh, setRefresh] = useState(false);

    // Function to refresh job listings when a new job is added
    const handleJobAdded = () => {
        setRefresh(prev => !prev);
    };

    return (
        <div>
            <h1>Job Portal</h1>
            <JobForm onJobAdded={handleJobAdded} />
            <JobListings key={refresh} />  {/* Refresh when state changes */}
        </div>
    );
}

export default App;
