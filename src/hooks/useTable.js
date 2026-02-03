import { useEffect, useRef, useState } from 'react';

const useTable = ({
    data: initialData = [],
    columns = [],
    initialSort = { key: null, direction: null },
    initialItemsPerPage = 10,
    itemsPerPageOptions = [5, 10, 20, 50, 100, 200] // Add default options here
}) => {
    // Use a ref to track data changes
    const dataRef = useRef(initialData);

    console.log("this is the use table component",initialData);

    // State for data handling
    const [data, setData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState(initialSort);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState();
    const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
    const [showItemsPerPageDropdown, setShowItemsPerPageDropdown] = useState(false);

    // Make sure initial items per page is in the options
    useEffect(() => {
        if (itemsPerPageOptions && itemsPerPageOptions.length > 0 && !itemsPerPageOptions.includes(initialItemsPerPage)) {
            console.warn(`initialItemsPerPage (${initialItemsPerPage}) is not in itemsPerPageOptions. Using first value from options.`);
            setItemsPerPage(itemsPerPageOptions[0]);
        } else if (!itemsPerPageOptions || itemsPerPageOptions.length === 0) {
            console.warn('No itemsPerPageOptions provided. Using default 10.');
            setItemsPerPage(10);
        } else {
            setItemsPerPage(initialItemsPerPage);
        }
    }, [initialItemsPerPage, itemsPerPageOptions]);

    // Update data state when initialData changes - prevents infinite loop
    useEffect(() => {
        // Only update if the data has actually changed
        if (JSON.stringify(dataRef.current) !== JSON.stringify(initialData)) {
            dataRef.current = initialData;
            setData(initialData);
        }
    }, [initialData]);

    // Handle sorting
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Apply sorting and filtering - separate from initialData updates
    useEffect(() => {
        let sortedData = [...dataRef.current];

        // Filter by search query
        if (searchQuery) {
            sortedData = sortedData.filter(item =>
                Object.values(item).some(value =>
                    value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }

        // Apply sorting
        if (sortConfig.key) {
            sortedData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }

        setData(sortedData);
    }, [searchQuery, sortConfig]);  // Remove initialData dependency to avoid the loop

    // Reset to first page when items per page changes
    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Handle changing items per page
    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(value);
        setShowItemsPerPageDropdown(false);
    };

    // Toggle items per page dropdown
    const toggleItemsPerPageDropdown = (e) => {
        // Check if event exists before trying to access its methods
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setShowItemsPerPageDropdown(!showItemsPerPageDropdown);
    };

    // Close dropdown
    const closeItemsPerPageDropdown = (e) => {
        // Don't close if the click is inside the dropdown menu
        if (e && e.target && e.target.closest('.items-per-page-dropdown')) {
            return;
        }
        setShowItemsPerPageDropdown(false);
    };

    return {
        // Data
        data,
        currentItems,
        columns,

        // Sorting
        sortConfig,
        requestSort,

        // Search
        searchQuery,
        setSearchQuery,

        // Pagination
        currentPage,
        setCurrentPage,
        totalPages,
        indexOfFirstItem,
        indexOfLastItem,

        // Items per page
        itemsPerPage,
        itemsPerPageOptions,  // Return the actual options used
        handleItemsPerPageChange,
        showItemsPerPageDropdown,
        toggleItemsPerPageDropdown,
        closeItemsPerPageDropdown
    };
};

export default useTable;
