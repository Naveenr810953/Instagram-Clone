// Sample data for stories
const stories = [
    { username: "travel_lover", image: "https://randomuser.me/api/portraits/women/23.jpg" },
    { username: "foodie_adventures", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { username: "fitness_guru", image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { username: "tech_geek", image: "https://randomuser.me/api/portraits/men/55.jpg" },
    { username: "art_creator", image: "https://randomuser.me/api/portraits/women/67.jpg" },
    { username: "music_producer", image: "https://randomuser.me/api/portraits/men/78.jpg" },
    { username: "book_worm", image: "https://randomuser.me/api/portraits/women/89.jpg" },
];

// Sample data for posts
const posts = [
    { 
        username: "travel_lover", 
        userImage: "https://randomuser.me/api/portraits/women/23.jpg",
        postImage: "https://source.unsplash.com/random/600x600/?travel",
        likes: "1,234",
        caption: "Exploring new places is my passion! #travel #adventure",
        comments: "View all 56 comments"
    },
    { 
        username: "foodie_adventures", 
        userImage: "https://randomuser.me/api/portraits/men/32.jpg",
        postImage: "https://source.unsplash.com/random/600x600/?food",
        likes: "892",
        caption: "Delicious meal at the new restaurant downtown! #foodie #yum",
        comments: "View all 32 comments"
    }
];

// Sample data for suggestions
const suggestions = [
    { username: "photography_pro", image: "https://randomuser.me/api/portraits/women/33.jpg", info: "New to Instagram" },
    { username: "fashion_icon", image: "https://randomuser.me/api/portraits/men/44.jpg", info: "Followed by user123" },
    { username: "gaming_legend", image: "https://randomuser.me/api/portraits/women/55.jpg", info: "Followed by 3 friends" },
    { username: "pet_lover", image: "https://randomuser.me/api/portraits/men/66.jpg", info: "Suggested for you" },
    { username: "fitness_coach", image: "https://randomuser.me/api/portraits/women/77.jpg", info: "Followed by user456" }
];

// Function to create story element
function createStoryElement(story) {
    const storyDiv = document.createElement('div');
    storyDiv.className = 'flex flex-col items-center space-y-1';
    
    storyDiv.innerHTML = `
        <div class="w-16 h-16 rounded-full p-1 story-gradient">
            <div class="w-full h-full rounded-full bg-white p-0.5">
                <img src="${story.image}" alt="Story" class="w-full h-full rounded-full object-cover">
            </div>
        </div>
        <span class="text-xs truncate w-16 text-center">${story.username}</span>
    `;
    
    return storyDiv;
}

// Function to create post element
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'bg-white border border-gray-300 rounded-md';
    
    postDiv.innerHTML = `
        <div class="flex items-center justify-between p-3">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-full overflow-hidden">
                    <img src="${post.userImage}" alt="User" class="w-full h-full object-cover">
                </div>
                <span class="font-semibold">${post.username}</span>
            </div>
            <button class="text-xl">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        </div>
        
        <div class="w-full aspect-square bg-gray-200">
            <img src="${post.postImage}" alt="Post" class="w-full h-full object-cover">
        </div>
        
        <div class="p-3">
            <div class="flex justify-between mb-2">
                <div class="flex space-x-4">
                    <button class="text-2xl"><i class="far fa-heart"></i></button>
                    <button class="text-2xl"><i class="far fa-comment"></i></button>
                    <button class="text-2xl"><i class="far fa-paper-plane"></i></button>
                </div>
                <button class="text-2xl"><i class="far fa-bookmark"></i></button>
            </div>
            
            <div class="font-semibold mb-1">${post.likes} likes</div>
            
            <div class="mb-1">
                <span class="font-semibold">${post.username}</span>
                <span>${post.caption}</span>
            </div>
            
            <div class="text-gray-500 mb-1">${post.comments}</div>
            <div class="flex items-center">
                <input type="text" placeholder="Add a comment..." class="w-full py-1 focus:outline-none">
                <button class="text-blue-500 font-semibold">Post</button>
            </div>
        </div>
    `;
    
    return postDiv;
}

// Function to create suggestion element
function createSuggestionElement(suggestion) {
    const suggestionDiv = document.createElement('div');
    suggestionDiv.className = 'flex items-center justify-between';
    
    suggestionDiv.innerHTML = `
        <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full overflow-hidden">
                <img src="${suggestion.image}" alt="User" class="w-full h-full object-cover">
            </div>
            <div>
                <div class="text-sm font-semibold">${suggestion.username}</div>
                <div class="text-xs text-gray-500">${suggestion.info}</div>
            </div>
        </div>
        <button class="text-blue-500 text-xs font-semibold">Follow</button>
    `;
    
    return suggestionDiv;
}

// Load all content
document.addEventListener('DOMContentLoaded', function() {
    // Load stories
    const storiesContainer = document.getElementById('stories-container');
    stories.forEach(story => {
        storiesContainer.appendChild(createStoryElement(story));
    });

    // Load additional posts
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
        postsContainer.appendChild(createPostElement(post));
    });

    // Load suggestions
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestions.forEach(suggestion => {
        suggestionsContainer.appendChild(createSuggestionElement(suggestion));
    });

    // Like button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('fa-heart')) {
            if (e.target.classList.contains('far')) {
                e.target.classList.remove('far');
                e.target.classList.add('fas', 'text-red-500');
            } else {
                e.target.classList.remove('fas', 'text-red-500');
                e.target.classList.add('far');
            }
        }
    });
});
