async function getLastUpdated() {
  try {
    // Replace 'yourusername' with your actual GitHub username
    const response = await fetch('https://api.github.com/repos/austinxduong/javascript-stuff/commits?per_page=1');
    
    if (!response.ok) {
      throw new Error('Failed to fetch commits');
    }
    
    const commits = await response.json(); //gets response from github
    
    if (commits.length > 0) {
      const lastCommit = commits[0]; // gets the most recent commit via. github
      const lastUpdated = new Date(lastCommit.commit.author.date); // access the nested property from the github api response, then converts these key/values properties into a new Date object
      
      const formattedDate = lastUpdated.toLocaleDateString('en-US', { // date format is fixed due to 'toLocaleDateString
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: "long"
      });
      
      const element = document.getElementById('last-updated');
      if (element) {
        element.textContent = `portfolio updated: ${formattedDate}`;
        element.title = `Last repo commit message: ${lastCommit.commit.message}`; // shows the last commit message to the 'javascript-stuff' repo on hover
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