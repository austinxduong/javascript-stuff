async function getLastUpdated() {
  try {
    // Replace 'yourusername' with your actual GitHub username
    const response = await fetch('https://api.github.com/repos/austinxduong/javascript-stuff/commits?per_page=1');
    
    if (!response.ok) {
      throw new Error('Failed to fetch commits');
    }
    
    const commits = await response.json();
    
    if (commits.length > 0) {
      const lastCommit = commits[0];
      const lastUpdated = new Date(lastCommit.commit.author.date);
      
      const formattedDate = lastUpdated.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: "long"
      });
      
      const element = document.getElementById('last-updated');
      if (element) {
        element.textContent = `Last updated: ${formattedDate}`;
        element.title = `Last commit: ${lastCommit.commit.message}`;
      }
    }
  } catch (error) {
    console.log('Could not fetch last updated date:', error);
    
    // Fallback to current date instead of "Recently"
    const fallbackDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const element = document.getElementById('last-updated');
    if (element) {
      element.textContent = `Last updated: ${fallbackDate}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', getLastUpdated);