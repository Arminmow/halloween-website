import React from 'react';

function ChangeLogData({version , date , changes}) {

    return (
        <div className="changeLog-data">
            <h3 className="changeLog-data-title">Version {version}</h3>
            <h4 className="changeLog-data-date">{date}</h4>
            <ul className="changeLog-data-list">
                {changes.map((change) => {
                    return <li>{change}</li>
                } )}
            </ul>
        </div>
    );
}

export default ChangeLogData;
