<template>
    <div class="history-wrapper">
        <div class="container-fluid mt-4">
            <h4>Bet History</h4>
            <b-row>
                <b-col>
                    <b-button-group class="bet-history-type-btn-wrapper">
                        <b-button :class="{active: isActiveUnsettled}" @click="unsettled">Unsettled</b-button>
                        <b-button :class="{active: isActiveSettled}" @click="settled">Settled</b-button>
                    </b-button-group>
                </b-col>
                <b-col>
                    <b-form-select
                        v-model="chooseOption"
                        size="sm"
                        class="choose-option px-3"
                        :options="chooseOptions"
                    ></b-form-select>
                </b-col>
            </b-row>
            <b-row class="my-4">
                <b-col>
                    <b-form-group
                        label="Show"
                        label-for="per-page-select"
                        label-cols-sm="6"
                        label-cols-md="4"
                        label-cols-lg="3"
                        label-align-sm="left"
                        label-size="sm"
                        class="mb-0 page-option-label p-0"
                        >
                        <b-form-select
                            id="per-page-select"
                            v-model="perPage"
                            :options="pageOptions"
                            size="sm"
                        ></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col class="px-0">
                    <b-form-group
                    label=""
                    label-for="filter-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0 search-bet-wrapper"
                    >
                        <b-input-group size="sm" class="mr-5">
                            <b-form-input 
                                v-model="filter" 
                                id="filter-input" 
                                type="search" 
                                placeholder="Search"></b-form-input>
                                <b-input-group-prepend is-text>
                                    <b-icon icon="search" :disabled="!filter" @click="filter = ''"></b-icon>
                                </b-input-group-prepend>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-table 
                :fields="fields"
                :current-page="currentPage"
                :filter="filter"
                :per-page="perPage"
                show-empty
                small
                :empty-text="emptyText"
            >
                <template #empty="scope">
                    <h6>{{ scope.emptyText }}</h6>
                </template>
                <template #emptyfiltered="scope">
                    <h6>{{ scope.emptyFilteredText }}</h6>
                </template>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
                class="my-0 float-right"
                :hide-goto-end-buttons="true"
                :hide-ellipsis="true"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        historyDetails: {
            type: Array
        }
    },
    data (){
        return{
            fields: [
                { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc' },
                { key: 's_w', label: 'S/W' },
                { key: 'game', label: 'Game' },
                { key: 'odd', label: 'Odd' },
                { key: 'status', label: 'Status' }
            ],
            totalRows: 8,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            isActiveUnsettled: true,
            isActiveSettled: false,
            chooseOption: null,
            chooseOptions: [
                { value: null, text: 'Choose...' },
            ],
            emptyText: 'No data available in table'
        };
    },
    methods: {
        unsettled(){
            this.isActiveUnsettled = !this.isActiveUnsettled
            this.isActiveSettled = !this.isActiveSettled
        },
        settled(){
            this.isActiveUnsettled = !this.isActiveUnsettled
            this.isActiveSettled = !this.isActiveSettled
        }
    }
};
</script>