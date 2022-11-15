import React from 'react'

const FilterMain = () => {
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const openFilter = Boolean(anchorElFilter);
    const handleClick = (event) => {
        setAnchorElFilter(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElFilter(null);
    };

    const [anchorElTypeFilter, setAnchorElTypeFilter] = useState(null);
    const openTypeFilter = Boolean(anchorElTypeFilter);
    const handleTypeFilterOpen = (event) => {
        setAnchorElTypeFilter(event.currentTarget);
    };
    const handleTypeFilterClose = (event) => {
        setAnchorElTypeFilter(null);
    };

/*     const [anchorElRegionFilter, setAnchorElRegionFilter] = useState(null);
    const openRegionFilter = Boolean(anchorElRegionFilter);
    const handleRegionFilterOpen = (event) => {
        setAnchorElRegionFilter(event.currentTarget);
    };
    const handleRegionFilterClose = (event) => {
        setAnchorElRegionFilter(null);
    };

    const [anchorElDurationFilter, setAnchorElDurationFilter] = useState(null);
    const openDurationFilter = Boolean(anchorElDurationFilter);
    const handleDurationFilterOpen = (event) => {
        setAnchorElDurationFilter(event.currentTarget);
    };
    const handleDurationFilterClose = (event) => {
        setAnchorElDurationFilter(null);
    }; */

    const filters = {
        Tipo: handleTypeFilterOpen,
        Região: handleRegionFilterOpen,
        Duração: handleDurationFilterOpen
    };
  return (
    <div>
        <Button
        id="filter-button"
        aria-controls={openFilter ? 'filter-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openFilter ? 'true' : undefined}
        onClick={handleClick}
        >Filters</Button>

        <Menu   // main filter menu; TODO: REFACTOR ALL THIS, USE A SINGLE COMPONENT FOR MENU ITEM, AND GENERALIZE
            id="filter-menu"
            anchorEl={anchorElFilter}
            open={openFilter}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'filter-button',
            }}
            >
            {Object.keys(filters).map((filter) => (
                <div>
                <MenuItem key={filter} onClick={filters[filter]}    // make separate components for these submenus
                    id={filter+"-filter-menu-option"}
                    aria-haspopup="true">
                    <Typography textAlign="left">
                        {filter}
                    </Typography>
                </MenuItem>
                <Menu     // submenu
                id={filter+"-filter-menu"}
                anchorEl={anchorElTypeFilter}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={openTypeFilter}
                onClose={handleTypeFilterClose}
                >
                <MenuItem onClick={handleTypeFilterClose}>Tipos2</MenuItem>
                <MenuItem onClick={handleTypeFilterClose}>Região2</MenuItem>
                <MenuItem onClick={handleTypeFilterClose}>Duração2</MenuItem>
                </Menu>
                </div>
            ))}
            </Menu>
    </div>
  )
}

export default FilterMain