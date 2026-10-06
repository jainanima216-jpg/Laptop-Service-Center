function JobCardItem({ job }) {
    return (
        <article className="job-card">
            <div className="job-card-header">
                <h2>Job #{job.id}</h2>
                <span className={`job-status ${job.statusClass}`}>
                    {job.status}
                </span>
            </div>

            <div className="job-card-details">
                <p><strong>Customer:</strong> {job.customer}</p>
                <p><strong>Mobile:</strong> {job.mobile}</p>
                <p><strong>Laptop:</strong> {job.laptop}</p>
                <p><strong>Problem:</strong> {job.problem}</p>
                <p><strong>Date:</strong> {job.date}</p>
            </div>
        </article>
    );
}

export default JobCardItem;