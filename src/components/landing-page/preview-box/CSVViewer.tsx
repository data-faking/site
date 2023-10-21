
import { ParseResult } from 'papaparse'
import React, { useState } from 'react'

import { usePapaParse } from 'react-papaparse';

import './CSVViewer.scss';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface Props {
    src: string
}

/* interface Idata {
    data: string[][];
    errors: any;
    meta: {
        delimiter: string;
        linebreak: string;
        aborted: boolean;
    };
} */

//TODO look into parse object typing
//TODO phantom last row https://github.com/mholt/PapaParse/issues/447, skipEmptyLines is a workaround, maybe problem for null/empty values
//TODO make the table more pretty
//TODO copy to clipboard feature
//TODO option to include headers or not


function CSVViewer(props: Props) {

    const { readString } = usePapaParse();
    const [headers, setHeaders] = useState<string[]>([]);
    const [contents, setContents] = useState<string[][]>([]);
    const [showRaw, setShowRaw] = useState(false);


    function makeTable() {
        readString(props.src, {
            worker: true,

            //maybe have to change this for null/empty values
            skipEmptyLines: true,
            complete: (results: ParseResult<any>) => {
                setHeaders(results.data[0]);
                setContents(results.data.slice(1));
            }
        })

        return (
            <table className='csv-table'>
                <thead className='csv-table__header'>
                    <tr>
                        {headers.map((header, idx) => <th className='csv-table__header' key={idx}>{header}</th>)}
                    </tr>
                </thead>
                <tbody className='csv-table__body'>
                    {contents.map((content, idx) => {
                        return (
                            <tr key={idx}>
                                {content.map((value, idx) => {
                                    return (
                                        <td key={idx}>{value}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    return (

        <div className='csv-display'>
            <div className='csv-display__options-wrapper'>
                {/* //TODO find a better way to render selected button styles */}
                {!showRaw ? <button className='csv-display__options-button--selected' onClick={() => setShowRaw(false)}>Table</button> : <button className='csv-display__options-button' onClick={() => setShowRaw(false)}>Table</button>}
                {showRaw ? <button className='csv-display__options-button--selected' onClick={() => setShowRaw(true)}>Raw</button> : <button className='csv-display__options-button' onClick={() => setShowRaw(true)}>Raw</button>}
            </div>
            {showRaw ? <div><pre>{props.src}</pre></div> : makeTable()}
        </div >

    )
}

export default CSVViewer
