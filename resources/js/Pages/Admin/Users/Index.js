import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/Layout';
import Icon from '@/Shared/Icon';
import SearchFilter from '@/Shared/SearchFilter';
import Pagination from '@/Shared/Pagination';

export default () => {
    const { user } = usePage().props;
    const { data, links } = user;
    return (
        <AdminLayout>
            <div>
                <Helmet title="Labkom FMIPA UNS | Users" />
                <h1 className="mb-8 font-bold text-3xl">Users</h1>
                <div className="mb-6 flex justify-between items-center">
                    <SearchFilter />
                    <InertiaLink as='a' className="btn-indigo" href={route('User.create')}>
                        <span>Tambah</span>
                        <span className="hidden md:inline"> User</span>
                    </InertiaLink>
                </div>
                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                        <tr className="text-left font-bold">
                            <th className="px-6 pt-5 pb-4">Name</th>
                            <th className="px-6 pt-5 pb-4">Email</th>
                            <th className="px-6 pt-5 pb-4">Role</th>
                            <th className="px-6 pt-5 pb-4">#</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(({ id, name, photo, email, role, deleted_at }) => {
                            return (
                                <tr
                                    key={id}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border-t">
                                        <InertiaLink
                                            as='a'
                                            href={route('User.edit', id)}
                                            className="px-6 py-4 flex items-center focus:text-indigo-700"
                                        >
                                            {photo && (
                                                <img
                                                    src={photo}
                                                    className="block w-5 h-5 rounded-full mr-2 -my-2"
                                                    alt={name}/>
                                            )}
                                            {name}
                                            {deleted_at && (
                                                <Icon
                                                    name="trash"
                                                    className="flex-shrink-0 w-3 h-3 text-gray-400 fill-current ml-2"
                                                />
                                            )}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            as='a'
                                            tabIndex="-1"
                                            href={route('User.edit', id)}
                                            className="px-6 py-4 flex items-center focus:text-indigo"
                                        >
                                            {email}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            as='a'
                                            tabIndex="-1"
                                            href={route('User.edit', id)}
                                            className="px-6 py-4 flex items-center focus:text-indigo"
                                        >
                                            {(role === 'super admin') ? 'Super Admin' : 'Admin'}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t w-px">
                                        <InertiaLink
                                            as='a'
                                            tabIndex="-1"
                                            href={route('User.edit', id)}
                                            className="px-4 flex items-center"
                                        >
                                            <Icon
                                                name="cheveron-right"
                                                className="block w-6 h-6 text-gray-400 fill-current"
                                            />
                                        </InertiaLink>
                                    </td>
                                </tr>
                            );
                        })}
                        {data.length === 0 && (
                            <tr>
                                <td className="border-t px-6 py-4" colSpan="4">
                                    No users found.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <Pagination links={links} />
            </div>
        </AdminLayout>
    );
};
