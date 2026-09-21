'use client';

import { useContext } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarShapeProps,
    LabelList,
    Label,
    LabelProps,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { BookContext } from '../context/BookContext';

const colors = ['#2563EB', '#0D9488', '#D97706', '#7C3AED', '#DB2777', '#0891B2', '#65A30D'];

const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;
    const color = colors[(index ?? 0) % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 4 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{ transition: 'stroke-width 0.3s ease-out' }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
};

export default function CustomShapeBarChart() {
    const { readBook } = useContext(BookContext);

    const chartData = readBook.map((book) => ({
        name: book.bookName.length > 18 ? `${book.bookName.slice(0, 18)}...` : book.bookName,
        pages: book.totalPages,
    }));

    return (
        <section className="w-full rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Reading Overview</h2>
                    <p className="mt-1 text-sm text-gray-500">Total pages of your read books</p>
                </div>

                <div className="w-fit rounded-xl bg-green-50 px-4 py-2">
                    <p className="text-xs font-medium text-green-700">Total Books</p>
                    <p className="text-xl font-bold text-green-800">{readBook.length}</p>
                </div>
            </div>

            {/* Empty State */}
            {readBook.length === 0 ? (
                <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                        </svg>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800">No reading data yet</h3>
                    <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                        Add books to your read list to see your reading overview here.
                    </p>
                </div>
            ) : (
                /* Chart */
                <div className="h-72 w-full sm:h-80 lg:h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 25, right: 10, left: -15, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} interval={0} angle={-25} textAnchor="end" height={65} />
                            <YAxis width={45} tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} />
                            <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }} formatter={(value) => [`${value} pages`, 'Pages']} />
                            <Bar dataKey="pages" name="Pages" shape={TriangleBar} activeBar radius={[8, 8, 0, 0]}>
                                <LabelList content={CustomColorLabel} position="top" fontSize={11} fontWeight={600} />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </section>
    );
}