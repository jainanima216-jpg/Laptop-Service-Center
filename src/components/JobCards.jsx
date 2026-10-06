import JobCardItem from "./JobCardItem";

function JobCards() {
    const jobs = [
        {
            id: "JC-001",
            customer: "Anima Jain",
            mobile: "9876543210",
            laptop: "HP Pavilion 15",
            problem: "Screen Problem",
            date: "06 Oct 2026",
            status: "Pending",
            statusClass: "pending",
        },
        {
            id: "JC-002",
            customer: "Rahul Sharma",
            mobile: "9876543211",
            laptop: "Dell Inspiron 14",
            problem: "Keyboard Problem",
            date: "05 Oct 2026",
            status: "Completed",
            statusClass: "completed",
        },
        {
            id: "JC-003",
            customer: "Priya Singh",
            mobile: "9876543212",
            laptop: "Lenovo ThinkPad",
            problem: "Battery Problem",
            date: "04 Oct 2026",
            status: "In Progress",
            statusClass: "in-progress",
        },
    ];

    return (
        <section className="job-page">
            <div className="job-page-header">
                <div>
                    <h1>Job Cards</h1>
                    <p>Track laptop repair jobs and their status</p>
                </div>

                <button className="new-job-button">+ New Job</button>
            </div>

            <div className="job-card-grid">
                {jobs.map((job) => (
                    <JobCardItem key={job.id} job={job} />
                ))}
            </div>
        </section>
    );
}

export default JobCards;