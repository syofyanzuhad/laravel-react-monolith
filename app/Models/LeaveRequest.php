<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveRequest extends Model
{
    use HasFactory;

    protected $table = 'leave_requests';

    protected $fillable = [
        'user_outlet_id',
        'user_manager_id',
        'leave_type_id',
        'variation',
        'variation_id',
        'start_date',
        'end_date',
        'no_of_days',
        'halfday_type',
        'duration',
        'no_of_hours',
        'user_message',
        'admin_remark',
        'managed_by',
        'manager_message',
        'parent_leave_request_id',
        'notify_user_ids',
        'nominate_user_id',
        'cycle',
        'fpul_reason',
        'upa_reason',
        'status',
        'created_by',
        'editor_user_id',
        'created',
        'updated',
        'is_exclude_days',
        'exclude_days_list',
        'is_tiberias_cron_leave',
        // 'user_id',
        // 'leave_type_id',
        // 'start_date',
        // 'end_date',
        // 'reason',
        // 'status',
    ];
}
