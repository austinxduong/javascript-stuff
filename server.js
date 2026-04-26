import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: ['http://localhost:5505', 'https://austinxduong.github.io', 'https://www.austinxduong.com', 'https://austinxduong.com']
}));
app.use(express.json());

app.get('/api/github-contributions', async (req, res) => {
  const query = `
    query {
      user(login: "austinxduong") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('GitHub API error:', err);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));