const chaima={test}
dates = [    "2023-03-01",    "2023-03-02",    "2023-03-03",    "2023-03-04",    "2023-03-05",    "2023-03-06",    "2023-03-07",    "2023-03-08",    "2023-03-09",    "2023-03-10",    "2023-03-11",    "2023-03-12",    "2023-03-13",    "2023-03-14",    "2023-03-15",    "2023-03-16",    "2023-03-17",    "2023-03-18",    "2023-03-19",    "2023-03-20",    "2023-03-21",    "2023-03-22",    "2023-03-23",    "2023-03-24",    "2023-03-25",    "2023-03-26",    "2023-03-27",    "2023-03-28",    "2023-03-29",    "2023-03-30",    "2023-03-31"]
import os
import datetime

# Replace with your own GitHub username and repository name
username = "saadichaima"
repo_name = "test"

# Replace with your own name and email
name = "saadi chaima"
email = "saadichaima@gmail.com"

# Replace with your own access token
access_token = "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"

# Replace with the date you want to create a commit for
date_str = "2022-08-01"

# Convert date string to a datetime object
date = datetime.datetime.strptime(date_str, "%Y-%m-%d")

# Set the environment variables for Git
os.environ["GIT_AUTHOR_NAME"] = name
os.environ["GIT_AUTHOR_EMAIL"] = email
os.environ["GIT_COMMITTER_NAME"] = name
os.environ["GIT_COMMITTER_EMAIL"] = email

# Create a commit with a dummy file
os.system(f"touch {date_str}.txt")
os.system(f"git add {date_str}.txt")
os.system(f'GIT_AUTHOR_DATE="{date.isoformat()}" GIT_COMMITTER_DATE="{date.isoformat()}" git commit -m "Commit for {date_str}"')

# Push the commit to the repository
os.system(f"git push https://{access_token}@github.com/{username}/{repo_name}.git master")

