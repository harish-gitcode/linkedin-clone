import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widgets_articleleft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
            {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
            {newsArticle("WFH attracts more women to work", "Tops news - 12,324 readers")}
            {newsArticle("Monkeypox: India Updates", "Tops news - 7,324 readers")}
            {newsArticle("Uber rides out of Zomato", "Tops news - 8,894 readers")}
        </div>
    )
}

export default Widgets