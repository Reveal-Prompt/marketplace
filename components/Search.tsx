'use client';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Search({placeholder} : {placeholder: string}) {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    
    function handleSearch(term: string) {
        setSearchValue(term);
        console.log(term);
    }

    function clearSearch() {
        setSearchValue('');
        handleSearch('');
    }

    return(
        <div className='relative flex flex-1 shrink-0 max-w-2xl'>
            <label htmlFor="search" className='sr-only'>
                Search
            </label>

            <div className={`
                relative w-full transition-all duration-300
                ${isFocused ? 'scale-[1.02]' : 'scale-100'}
            `}>
                <input
                    id="search"
                    type="text"
                    value={searchValue}
                    className={`
                        peer block w-full rounded-xl border-2 
                        py-3.5 pl-12 pr-12 text-sm
                        bg-white/80 backdrop-blur-sm
                        transition-all duration-300
                        placeholder:text-gray-400
                        focus:outline-none
                        ${isFocused 
                            ? 'border-purple-500 shadow-[0_0_20px_rgba(106,91,255,0.25)]' 
                            : 'border-gray-200 hover:border-gray-300 shadow-sm'
                        }
                    `}
                    placeholder={placeholder}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                
                {/* Search Icon */}
                <MagnifyingGlassIcon 
                    className={`
                        absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 
                        transition-all duration-300
                        ${isFocused 
                            ? 'text-purple-600 scale-110' 
                            : 'text-gray-400'
                        }
                    `} 
                />

                {/* Clear Button */}
                {searchValue && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-4 top-1/2 -translate-y-1/2 
                                   p-1 rounded-full hover:bg-gray-100 
                                   transition-all duration-200 group"
                        aria-label="Clear search"
                    >
                        <XMarkIcon className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                    </button>
                )}

                {/* Focus ring effect */}
                <div className={`
                    absolute inset-0 rounded-xl bg-linear-to-r 
                    from-purple-500 to-pink-500 -z-10
                    transition-opacity duration-300
                    ${isFocused ? 'opacity-10 blur-xl' : 'opacity-0'}
                `} />
            </div>
        </div>
    )
}